package user.action;

import java.util.Scanner;

import user.bean.Bean;
import user.dao.TestDao;

public class TestDelete implements TestInterface {

	@Override
	public void excute() {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		System.out.println("�����Ͻ� ID�� �Է��ϼ���");
		String user=sc.next();

		Bean bean=new Bean();
		bean.setId(user);
		String ab=TestDao.getInstance().mapperselch(bean);
		
		if(ab!=null) {
			System.out.println("ID�� Ȯ�� �Ǿ����ϴ�. ������ ���� �Ͻðڽ��ϱ�?");
			System.out.println("�����Ͻ÷���1�� ����Ͻ÷���2���� �����ּ���");
			
			int z=sc.nextInt();
			if(z==1) {
				bean.setId(user);
				TestDao.getInstance().mapperdel(bean);	
				System.out.println("������ �����Ǿ����ϴ�");
				}
			if(z==2) {
				System.out.println("��ҵǾ����ϴ�");				    		   
		  		}
			}
		
	    while(ab==null) {
				System.out.println("�������� �ʴ� ID�Դϴ�. �ٽ� �Է��ϼ���");
				user=sc.next();
				bean.setId(user);
				ab=TestDao.getInstance().mapperselch(bean);
				if(ab!=null) {
					System.out.println("ID�� Ȯ�� �Ǿ����ϴ�. ������ ���� �Ͻðڽ��ϱ�?");
					System.out.println("�����Ͻ÷���1�� ����Ͻ÷���2���� �����ּ���");
					
					int z=sc.nextInt();
					if(z==1) {
						bean.setId(user);
						TestDao.getInstance().mapperdel(bean);	
						System.out.println("������ �����Ǿ����ϴ�");
						}
					if(z==2) {
						System.out.println("��ҵǾ����ϴ�");
				  		break;
				  		}
					}
				}
	    }
}