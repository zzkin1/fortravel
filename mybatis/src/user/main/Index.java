package user.main;

import java.util.Scanner;

import user.action.TesetInsert;
import user.action.TestDelete;
import user.action.TestInterface;
import user.action.TestSelect;
import user.action.TestUpdate;

public class Index {
		 static TestInterface in;
		
	static void select() {
		Scanner sc=new Scanner(System.in);
		while(true) {
			System.out.println("원하는 메뉴를 선택하세요");
			System.out.println("1.입력 2.수정 3.삭제 4.검색 5.종료");
			int z=sc.nextInt();
		
	
			
		if(z==1) {
			in=new TesetInsert();
			in.excute();
		}
		else if(z==2) {
			in=new TestUpdate();
			in.excute();		
		}
		else if(z==3) {
			in=new TestDelete();
			in.excute();
		}
		else if(z==4) {
			in=new TestSelect();
			in.excute();
		}
		else if(z==5) {
			break;
		}
		else {
			System.out.println("잘못 입력하셨습니다 다시 입력해주세요");
		}
	 }
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		select();
		

	}

}
