import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.util.Enumeration;
public class ImageServlet extends  HttpServlet
{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
		Enumeration <String> e = request.getParameterNames();
		while(e.hasMoreElements()){
			//String name = (String) e.nextElement();
			String name = e.nextElement();
			String [] data = request.getParameterValues(name);
			response.setContentType("text/html;chareset=euc-kr");
			PrintWriter out = response.getWriter();
			out.println("<html><head><title>suvlet 을 이용한 이미지출력</title></head>");
			out.println("<body>");
			if(data!=null){
				for(int i=0; i<data.length;i++)
					out.printf("<img src='img/"+data[i]+".png' width='150px' height='150px''></img>");
			}
		
		
		out.println("</body></html>");
		}
	}
}