package gof.singleton;
//import gof.SingletonEager;
//mport gof.SingletonLazy;
//import gof.SingletonLazyHolder;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

		System.out.println("-------- Singleton Lazy -------- ");
		SingletonLazy lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);

		System.out.println("-------- Singleton Eager -------- ");
		SingletonEager eager = SingletonEager.getInstancia();
		System.out.println(eager);
		eager = SingletonEager.getInstancia();
		System.out.println(eager);

		System.out.println("-------- Singleton LazyHolder -------- ");
		SingletonLazyHolder lholder = SingletonLazyHolder.getInstancia();
		System.out.println(lholder);
		lholder = SingletonLazyHolder.getInstancia();
		System.out.println(lholder);
    }
}
