public abstract class Conta implements IConta{

	private static final int AGENCIA_PADRAO = 1;
	private static int SEQUENCIAL = 1;


	protected int agencia;
	protected int numero;
	private double saldo;
	private Cliente cliente;



	public Conta(Cliente cliente) {
		this.agencia = Conta.AGENCIA_PADRAO;
		this.numero = SEQUENCIAL++;
		this.cliente = cliente;
	}

	@Override
	public void deposit(double valor) {
		this.saldo += valor;
	}
	@Override
	public void withdraw(double valor) {
		if(this.saldo >= valor){
		this.saldo -= valor;
		}
	}

	@Override
	public void transfer(double valor, Conta contaDestino) {
		if(this.saldo >= valor){
			this.saldo -= valor;
			contaDestino.deposit(valor);
		}
	}

	protected void imprimirExtrato(){
		System.out.println(String.format("Titular: %s", this.cliente.getNome()));
		System.out.println(String.format("Agencia: %d", this.agencia));
		System.out.println(String.format("Numero: %d", this.numero));
		System.out.println(String.format("Saldo: %.2f", this.saldo));
	}

}
