export default class DB {
	private dbName: string; // 数据库名称
	private db: any; // 数据库对象

	constructor(dbName: string) {
		this.dbName = dbName;
	}

	// 打开数据库
	public openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
		// 数据库版本只能是升级 不能降级
		const request = window.indexedDB.open(this.dbName, 1);
		request.onsuccess = (event: any) => {
			console.log('数据库打开成功');
			this.db = event.target.result;
			console.log(event);
		};
		request.onerror = (event) => {
			console.log('数据库打开失败');
			console.log(event);
		};
		request.onupgradeneeded = (event) => {
			console.log('数据库升级成功');
			const { result }: any = event.target;
			// 创建对象仓库
			const store = result.createObjectStore(storeName, {
				autoIncrement: true,
				keyPath,
			});

			// 新建索引  参数（名称 属性 path对象）
			if (indexs && indexs.length > 0) {
				indexs.map((v: string) => {
					store.createIndex(v, v, { unique: false });
				});
			}

			store.transaction.oncomplete = (event: any) => {
				console.log('创建对象仓库成功');
			};
			console.log(event);
		};
	}

	// 新增/修改(add/put) 数据库数据
	updateItem(storeName: string, data: any) {
		// 参数（数据库对象的名字, 操作模式）
		const store = this.db
			.transaction([storeName], 'readwrite')
			.objectStore(storeName);
		const request = store.put({ ...data, updateTime: new Date().getTime() });
		request.onsuccess = (event: any) => {
			console.log('数据库写入成功');
			console.log(event);
		};
		request.onerror = (event: any) => {
			console.log('数据库写入失败');
			console.log(event);
		};
	}

	// 删除(delete) 数据库数据
	deleteItem(storeName: string, key: number | string) {
		// 参数（数据库对象的名字, 操作模式）
		const store = this.db
			.transaction([storeName], 'readwrite')
			.objectStore(storeName);
		const request = store.delete(key);
		request.onsuccess = (event: any) => {
			console.log('数据删除成功');
			console.log(event);
		};
		request.onerror = (event: any) => {
			console.log('数据库删除失败');
			console.log(event);
		};
	}

	// 查询所有数据
	getList(storeName: string) {
		// 参数（数据库对象的名字, 操作模式）
		const store = this.db
			.transaction([storeName], 'readwrite')
			.objectStore(storeName);
		const request = store.getAll();
		request.onsuccess = (event: any) => {
			console.log('查询所有数据成功');
			console.log(event.target.result);
		};
		request.onerror = (event: any) => {
			console.log('查询所有数据失败');
			console.log(event);
		};
	}

	// 查询某条数据
	getItem(storeName: string, key: number | string) {
		// 参数（数据库对象的名字, 操作模式）
		const store = this.db
			.transaction([storeName], 'readwrite')
			.objectStore(storeName);
		const request = store.get(key);
		request.onsuccess = (event: any) => {
			console.log('查询某条数据成功');
			console.log(event.target.result);
		};
		request.onerror = (event: any) => {
			console.log('查询某条数据失败');
			console.log(event);
		};
	}
}
