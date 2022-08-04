package gof.strategy;

//strategy

public class App {
    public static void main(String[] args) throws Exception {


		System.out.println("Hello, World!");

		Comportamento defensivo = new ComportamentoDefensivo();
		Comportamento normal = new ComportamentoNormal();
		Comportamento agressivo = new ComportamentoAgressivo();

		Robo robo = new Robo();

		robo.setStrategy(normal);
		robo.mover();

		robo.setStrategy(defensivo);
		robo.mover();

		robo.setStrategy(agressivo);
		robo.mover();
    }
}

