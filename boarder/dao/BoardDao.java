package boarder.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import boarder.bean.BoardDto;

public class BoardDao {
	Connection conn=null; 
	Statement stmt=null;

	public BoardDao(){
	try{
		Class.forName("com.mysql.jdbc.Driver");
	}catch(Exception e){
		
	}
}
	public void Driver() {
	try{
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/dataex","root","123456789a");
	}catch(Exception e){
		
	}
}
	
	public void close() {
		try{
			
			stmt.close();
			
		}catch(Exception e) {
			
		}try{
			
			conn.close();
			
		}catch(Exception e) {
			
		}
			
	}
	public ArrayList<BoardDto> List() {
		
		ArrayList<BoardDto> borderlist=new ArrayList<BoardDto>(); 
		try{
			Driver();
		stmt=conn.createStatement();
		String command = "select * from board;";
		ResultSet rs=stmt.executeQuery(command);
		while(rs.next()) {
			
			BoardDto dto=new BoardDto();
			dto.setNumber(rs.getInt("num"));
			dto.setCategory(rs.getString("category"));
			dto.setTitle(rs.getString("title"));
			dto.setWritter(rs.getString("writter"));
			dto.setDate(rs.getTimestamp("date"));
			dto.setHits(rs.getInt("hits"));
			
			borderlist.add(dto);
		}
		}catch (Exception igException) {
			
		}
		return borderlist;
	}
}




