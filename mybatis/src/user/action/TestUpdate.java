package user.action;

import java.util.Scanner;

import user.bean.Bean;
import user.dao.TestDao;

public class TestUpdate implements TestInterface {

	@Override
	public void excute() {
		// TODO Auto-generated method stub
		
		Scanner sc=new Scanner(System.in);
		System.out.println("ID를 입력하세요");
		String user=sc.next();
		
		Bean bean=new Bean();
		bean.setId(user);
		String ab=TestDao.getInstance().mapperselch(bean);
		
	    while(ab==null) {
				System.out.println("없는 ID입니다. 다시 입력하세요");
				user=sc.next();
				bean.setId(user);
				ab=TestDao.getInstance().mapperselch(bean);
		}
	    System.out.println("ID를 확인했습니다");
		System.out.println("변경할 PW를 입력하세요");
		String pass=sc.next();
		
		bean.setId(user);
		bean.setPw(pass);
		
		
		TestDao.getInstance().mapperupd(bean);
		System.out.println("pw가 변경되었습니다");
	}

}
