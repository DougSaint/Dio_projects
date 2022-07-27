public class Main {
	public static void main(String[] args) {
		Cliente cliente = new Cliente();
		cliente.setNome("Doug");
		Conta cc = new ContaCorrente(cliente);
		Conta poupanca = new ContaPoupanca(cliente);


		cc.imprimirExtrato();
		poupanca.imprimirExtrato();

	}
}
