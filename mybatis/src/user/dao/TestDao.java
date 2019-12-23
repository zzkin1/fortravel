package user.dao;

import java.io.IOException;
import java.io.Reader;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import user.bean.Bean;

public class TestDao {
	
	private static final Object Bean = null;

	public static TestDao ob;//ΩÃ±€≈Ê∞¥√º
	
	private SqlSessionFactory factory;
	
	public static TestDao getInstance() {
		if (ob == null) {
			synchronized (TestDao.class) {
				ob = new TestDao();
			}
		}
		return ob;
	}
	
	public TestDao() {
		try {
			Reader reader = Resources.getResourceAsReader("xml.xml");//»Ø∞Êº≥¡§∆ƒ¿œ
			factory = new SqlSessionFactoryBuilder().build(reader);
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
	
	public void mapperin(Bean obb){
		SqlSession sqlsession = factory.openSession();
		sqlsession.insert("insert",obb);
		sqlsession.commit();
		sqlsession.close();
	}
	public List<Bean> mappersel() {
		SqlSession sqlsession = factory.openSession();
		List<Bean> ab=sqlsession.selectList("select");
		sqlsession.close();	
		return ab;
	}
	public void mapperdel(Bean obb) {
		SqlSession sqlsession = factory.openSession();
		sqlsession.delete("delete",obb);
		sqlsession.commit();
		sqlsession.close();			
	}
	public void mapperupd(Bean obb) {
		SqlSession sqlsession = factory.openSession();
		sqlsession.update("update",obb);
		sqlsession.commit();
		sqlsession.close();		
	}
	public String mapperselch(Bean obb) {
		SqlSession sqlsession = factory.openSession();
		String ab=sqlsession.selectOne("selch",obb);
		sqlsession.close();	
		return ab;
	}
	

}
