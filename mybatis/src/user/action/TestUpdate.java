package user.action;

import java.util.Scanner;

import user.bean.Bean;
import user.dao.TestDao;

public class TestUpdate implements TestInterface {

	@Override
	public void excute() {
		// TODO Auto-generated method stub
		
		Scanner sc=new Scanner(System.in);
		System.out.println("ID�� �Է��ϼ���");
		String user=sc.next();
		
		Bean bean=new Bean();
		bean.setId(user);
		String ab=TestDao.getInstance().mapperselch(bean);
		
	    while(ab==null) {
				System.out.println("���� ID�Դϴ�. �ٽ� �Է��ϼ���");
				user=sc.next();
				bean.setId(user);
				ab=TestDao.getInstance().mapperselch(bean);
		}
	    System.out.println("ID�� Ȯ���߽��ϴ�");
		System.out.println("������ PW�� �Է��ϼ���");
		String pass=sc.next();
		
		bean.setId(user);
		bean.setPw(pass);
		
		
		TestDao.getInstance().mapperupd(bean);
		System.out.println("pw�� ����Ǿ����ϴ�");
	}

}
