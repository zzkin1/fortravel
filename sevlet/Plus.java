import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

class Plus extends HttpServlet {
	
	public void doGet(HttpServletRequest request,HttpServletResponse response)
	throws IOException {
	
		String str1=request.getParameter("num1");
		String str2=request.getParameter("num2");
			int num1 = Integer.parseInt(str1);
		int num2 = Integer.parseInt(str2);
		int sum= num1+num2;
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<html><head><title>µ¡¼À ÇÁ·Î±×·¥</title></head>");
		out.println("<body>");
		out.printf("%d+%d=%d",num1,num2,sum);
		out.println("</body></html>");
	
		
	}
}		