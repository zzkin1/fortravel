package user.action;

import java.util.ArrayList;
import java.util.List;

import user.bean.Bean;
import user.dao.TestDao;

public class TestSelect implements TestInterface {

	
	public void excute() {
		
		List<Bean> ab=TestDao.getInstance().mappersel();
		
		for(int i=0; i<ab.size(); i++) {
			System.out.println("id:"+ab.get(i).getId()+" pw:"+ab.get(i).getPw()+" addr:"+ab.get(i).getAddr());			
		}
	}		
		
}
