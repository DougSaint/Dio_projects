package gof.singleton;

// Trabalhando com a ideia de um singleton lazy

public class SingletonLazy {
	private static SingletonLazy instancia;

	private SingletonLazy() {
		super();
	} // Ninguem fora da classe consegue instanciar

	public static SingletonLazy getInstancia() {
		if (instancia == null){
			instancia = new SingletonLazy();
		}
		return instancia;
	}
}
