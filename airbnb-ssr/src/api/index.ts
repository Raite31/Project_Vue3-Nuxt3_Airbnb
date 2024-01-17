// https://service-ase3oocp-1302839745.sh.apigw.tencentcs.com/api/room/getRoomList?pageNo=1&pageSize = 3
import { http } from '../utiils/http';

export function fetchRoomList() {
	return http.httpRequestGet(
		'https://service-ase3oocp-1302839745.sh.apigw.tencentcs.com/api/room/getRoomList?pageNo=1&pageSize = 3',
		{}
	);
}
