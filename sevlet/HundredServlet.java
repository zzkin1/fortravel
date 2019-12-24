import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HundredServlet extends HttpServlet {

	public void doGet(HttpServletRequest req,HttpServletResponse resp)
	throws ServletException,IOException	{
		int total=0;
		for(int cnt=1; cnt<101;cnt++)
			total+=cnt;
		resp.setContentType("text/html:chareset=EUC-kr");
		PrintWriter out=resp.getWriter();
		out.println("<html>");
		out.println("<head><title>1���� 100���� ���ϴ� ����</title></head>");
		out.println("<body>");
		out.printf("1���� 100���� ����= %d:",total);
		out.println("</body></html>");
	}
}
