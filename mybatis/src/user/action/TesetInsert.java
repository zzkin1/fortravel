package user.action;

import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

import user.bean.Bean;
import user.dao.TestDao;

public class TesetInsert implements TestInterface {

	@Override
	public void excute() {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		System.out.println("ID를 입력하세요");
		String user=sc.next();

		Bean bean=new Bean();
		bean.setId(user);
		String ab=TestDao.getInstance().mapperselch(bean);
		
	    while(ab!=null) {
				System.out.println("중복된 ID입니다. 다시 입력하세요");
				user=sc.next();
				bean.setId(user);
				ab=TestDao.getInstance().mapperselch(bean);
		}
			
			System.out.println("사용하셔도 좋은 ID입니다");
			System.out.println("비밀번호를 입력하세요");
			String pass=sc.next();
			System.out.println("주소를입력하세요");
			String addr=sc.next(); 
			
			bean.setId(user);
			bean.setPw(pass);
			bean.setAddr(addr);
			

			TestDao.getInstance().mapperin(bean);
			System.out.println("정보가 입력되었습니다");

		
}
}
