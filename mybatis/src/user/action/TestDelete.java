package user.action;

import java.util.Scanner;

import user.bean.Bean;
import user.dao.TestDao;

public class TestDelete implements TestInterface {

	@Override
	public void excute() {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		System.out.println("삭제하실 ID를 입력하세요");
		String user=sc.next();

		Bean bean=new Bean();
		bean.setId(user);
		String ab=TestDao.getInstance().mapperselch(bean);
		
		if(ab!=null) {
			System.out.println("ID가 확인 되었습니다. 정말로 삭제 하시겠습니까?");
			System.out.println("삭제하시려면1번 취소하시려면2번을 눌러주세요");
			
			int z=sc.nextInt();
			if(z==1) {
				bean.setId(user);
				TestDao.getInstance().mapperdel(bean);	
				System.out.println("정보가 삭제되었습니다");
				}
			if(z==2) {
				System.out.println("취소되었습니다");				    		   
		  		}
			}
		
	    while(ab==null) {
				System.out.println("존재하지 않는 ID입니다. 다시 입력하세요");
				user=sc.next();
				bean.setId(user);
				ab=TestDao.getInstance().mapperselch(bean);
				if(ab!=null) {
					System.out.println("ID가 확인 되었습니다. 정말로 삭제 하시겠습니까?");
					System.out.println("삭제하시려면1번 취소하시려면2번을 눌러주세요");
					
					int z=sc.nextInt();
					if(z==1) {
						bean.setId(user);
						TestDao.getInstance().mapperdel(bean);	
						System.out.println("정보가 삭제되었습니다");
						}
					if(z==2) {
						System.out.println("취소되었습니다");
				  		break;
				  		}
					}
				}
	    }
}