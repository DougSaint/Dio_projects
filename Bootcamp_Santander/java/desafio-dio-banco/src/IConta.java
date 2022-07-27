public interface IConta {

	 void deposit(double valor);
	 void withdraw(double valor);
	 void transfer(double valor, Conta contaDestino	);

}
