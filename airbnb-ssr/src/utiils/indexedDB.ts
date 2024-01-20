export default class DB {
	private dbName: string; // 数据库名称
	constructor(dbName: string) {
		this.dbName = dbName;
	}

	// 打开数据库
	public openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
		// 数据库版本只能是升级 不能降级
		const request = window.indexedDB.open(this.dbName, 1);
		request.onsuccess = (event) => {
			console.log('数据库打开成功');
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
					store.createIndex(v, v, { unique: true });
				});
			}

			store.transaction.oncomplete = (event: any) => {
				console.log('创建对象仓库成功');
			};
			console.log(event);
		};
	}
}
