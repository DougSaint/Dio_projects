package gof.facade;

public class App {
	public static void main(String[] args) {
		Facade facade = new Facade();

		facade.migrarCliente("Doug", "400038547");
	}
}
