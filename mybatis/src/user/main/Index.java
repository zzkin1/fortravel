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
			System.out.println("���ϴ� �޴��� �����ϼ���");
			System.out.println("1.�Է� 2.���� 3.���� 4.�˻� 5.����");
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
			System.out.println("�߸� �Է��ϼ̽��ϴ� �ٽ� �Է����ּ���");
		}
	 }
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		select();
		

	}

}
