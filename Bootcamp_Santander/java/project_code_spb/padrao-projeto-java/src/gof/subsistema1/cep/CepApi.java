package gof.subsistema1.cep;

public class CepApi {

	private static CepApi instancia = new CepApi();

	private CepApi() {
		super();
	}

	public static CepApi getInstancia() {
		return instancia;
	}
	public String recuperarCidade(String Cep) {
		return "Montes Claros";
	}
	public String recuperarEstado(String Cep) {
		return "MG";
	}
}
