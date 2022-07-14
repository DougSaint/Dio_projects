import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Interrogatorio {
	public static void main(String[] args) {
		List<String> questions = new ArrayList<>();

		Scanner sc = new Scanner(System.in);
		Boolean resp;
		int positiveNumber = 0;
		Boolean start = false;
		questions.add("Telefonou para vítima?");
		questions.add("Esteve no local do crime?");
		questions.add("Mora perto da vítima?");
		questions.add("Devia para vítima?");
		questions.add("Já trabalhou com a vítima?");

		System.out.println("Só aceitamos true ou false como resposta, deseja continuar?");
		start = sc.nextBoolean();
		if (start == true){
			for (String x : questions) {
				System.out.println(x);
				do{
					resp = sc.nextBoolean();
				}while(resp == true || resp == false);

				if (resp == true){
					positiveNumber++;
				}
			}

			System.out.print("Você é considerado: ");
			if(positiveNumber == 2){
				System.out.println("Suspeita!");
			}else if(positiveNumber == 3 || positiveNumber == 4 ){
				System.out.println("Cúmplice");
			}else if(positiveNumber == 5){
				System.out.println("Assassina");
			}else{
				System.out.println("Inocente");
			}
		}
	}
}
