
import java.util.*;
public class Fill0row_0col
{
    // instance variables - replace the example below with your own
   public static void main(String args[])
   {
       int r,c,i,j,c0=0,c1=0;
        Scanner in=new Scanner(System.in);
        System.out.println("Enter the row number");
        r=in.nextInt();
        System.out.println("Enter the coloumn number");
        c=in.nextInt();
        int[][] a=new int[r][c];
        int[] rc=new int[100];
        int[] cc=new int[100];
        System.out.println("Enter the elements of matrix:");
        for(i=0;i<r;i++)
        {
            for(j=0;j<c;j++)
            {
                a[i][j]=in.nextInt();
            }
        }
        System.out.println("Your matrix is: ");
        for(i=0;i<r;i++)
        {
            for(j=0;j<c;j++)
            {
                System.out.print(a[i][j]+" ");
            }
            System.out.println();
        }
        for(i=0;i<r;i++)
        {
            for(j=0;j<c;j++)
            {
                if(a[i][j]==0)
                {
                    rc[c0++]=i;
                    cc[c1++]=j;
                }
            }
        }
        for(i=0;i<c0;i++)
        {
            for(j=0;j<c;j++)
            {
                a[rc[i]][j]=0;
            }
            
        }
        for(i=0;i<c1;i++)
        {
            for(j=0;j<r;j++)
            {
                a[j][cc[i]]=0;
            }
        }
        System.out.println("Okayyyy....");
        for(i=0;i<r;i++)
        {
            for(j=0;j<c;j++)
            {
                System.out.print(a[i][j]+" ");
            }
            System.out.println();
        }
        
   }
}
