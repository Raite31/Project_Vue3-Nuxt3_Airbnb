// https://service-ase3oocp-1302839745.sh.apigw.tencentcs.com/api/room/getRoomList?pageNo=1&pageSize = 3
import { http } from '../utils/http';
import IndexDB from '../utils/indexedDB';

const airbnbDB = new IndexDB('airbnb');

// 真实接口
export function fetchRoomList() {
	return http.httpRequestGet(
		'https://service-ase3oocp-1302839745.sh.apigw.tencentcs.com/api/room/getRoomList?pageNo=1&pageSize = 3',
		{}
	);
}

// Mock接口
export async function fetchElephant() {
	await airbnbDB.openStore('elephant', 'id', ['nose', 'ear']);
	const result = await airbnbDB.getList('elephant').then((res) => {
		// 要这么处理后，调用时才能通过then获取这些数据
		return {
			code: '000',
			message: '操作成功',
			result: res,
			success: true,
		};
	});
	return result;
}
