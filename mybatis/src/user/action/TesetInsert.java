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
		
		System.out.println("ID�� �Է��ϼ���");
		String user=sc.next();

		Bean bean=new Bean();
		bean.setId(user);
		String ab=TestDao.getInstance().mapperselch(bean);
		
	    while(ab!=null) {
				System.out.println("�ߺ��� ID�Դϴ�. �ٽ� �Է��ϼ���");
				user=sc.next();
				bean.setId(user);
				ab=TestDao.getInstance().mapperselch(bean);
		}
			
			System.out.println("����ϼŵ� ���� ID�Դϴ�");
			System.out.println("��й�ȣ�� �Է��ϼ���");
			String pass=sc.next();
			System.out.println("�ּҸ��Է��ϼ���");
			String addr=sc.next(); 
			
			bean.setId(user);
			bean.setPw(pass);
			bean.setAddr(addr);
			

			TestDao.getInstance().mapperin(bean);
			System.out.println("������ �ԷµǾ����ϴ�");

		
}
}
