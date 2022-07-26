package POO.POO2.application;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;
import POO.POO2.entities.Employee;
import POO.POO2.entities.OutsourcedEmployee;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		List<Employee> list = new ArrayList<>();

		System.out.println("Enter the number of employees: ");

		int n = sc.nextInt();

		for ( int i = 1; i <= n; i++){
			System.out.println("Employee #" + i + "data: ");
			System.out.print("Outsourced (y/n)?");

			char ch = sc.next().charAt(0);

			System.out.print("Name: ");
			sc.nextLine();

			String name = sc.nextLine();

			System.out.print("Hours: ");

			int hours = sc.nextInt();

			System.out.print("Value per hour: ");

			Double valuePerHour = sc.nextDouble();
			if (ch == 'y'){
				System.out.println("Additional Charge: ");
				double additionalCharge = sc.nextDouble();
				Employee emp = new OutsourcedEmployee(name, hours, valuePerHour, additionalCharge);
				list.add(emp);
			}else{
				Employee emp = new Employee(name, hours, valuePerHour);
				list.add(emp);
			}

		}
		System.out.println();
		System.out.println("PAYMENTS:");
		for (Employee employee : list) {
			System.out.println(employee.getName()+ " - $ " + String.format("%.2f", employee.payment()));
		}
		sc.close();
	}
}
