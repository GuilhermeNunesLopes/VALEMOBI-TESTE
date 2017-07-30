
//class validaTudo{
//validar para digitar somente texto*/
	function letra(e)
	{
			var Tipo =formNeg.tipo.value;
			var Nome =formNeg.nome.value;
			var TN = formNeg.tn.value;

		var expressao;

		expressao = /[a-zA-Z]/;

		if(expressao.test(String.fromCharCode(e.keyCode)))
		{
		  return true;
		}
		else
		{
			alert("Você não digitou somente letras nos campos: \n Tipo de mercadoria\nNome ou Tipo de Negocio\n Obs:Pode estar faltando as 3/4 letras minimas necessarias \n Por favor retorne a um desses campos!");
			return erro;
		}
				
	}
		function validar()
		{
			var Cod_merc =formNeg.cod.value;
			var Tipo =formNeg.tipo.value;
			var Nome =formNeg.nome.value;
			var Qtd =formNeg.qtd.value;
			var Prec =formNeg.prec.value;
			var TN = formNeg.tn.value;
    		var num = parseInt(Cod_merc);
    		var nump = parseFloat(prec);
    		var erro =1;
    

 
         
		    		
		/*validando para ver se o codigo da mercadoria esta vazio e se o usuario digitou mais de 1 digito*/
					if( Cod_merc==""){
						alert("Preencha o campo Codigo da mercadoria ele não pode estar vazio!");
						formNeg.cod.focus();
						 return 0;
					}
					if(Cod_merc.length <=1){
						alert("O campo Codigo da mercadoria deve apresentar no minimo 2 numeros!");
						formNeg.cod.focus();
					 	return 0;
					}
					if(Cod_merc <0){
						alert("O campo Codigo da mercadoria não pode ser negativo!");
						formNeg.cod.focus();
						 return false;
					}if(Cod_merc.indexOf('-')== 1){
						alert("O campo Codigo da mercadoria não pode conter o sinal de negativo , por favor retire!");
						formNeg.cod.focus();
						 return false;
					}
					/*validando o codigo da mercadoria para ver se só foram digitados numeros.*/
					 if(isNaN(num)){
		       		 alert("O valor digitado no campo Codigo da mercadoria não é numero .\nPor favor digite um numero ");
		        		formNeg.Cod_merc.focus();
		        		 return false;
		      		}
		      		/*Validando o tipo para ver se ele esta preenchido e o tipo de produto deve conter no minimo 4 letras*/
						if(Tipo==""|| Tipo.length <=3){
						alert("Preencha o campo Tipo da mercadoria! \n Os produtos devem ter no minimo 4 letras");
						formNeg.tipo.focus();
						 return false;
						
					}
					/*Validando o nome para ver se ele esta preenchido*/
						if(Nome=="" || Nome.length <=2){
						alert("Preencha o campo Nome da mercadoria! \n Ele deve conter no minimo 3 letras");
						formNeg.nome.focus();
					 return false;
					}/*Validando a quantidade para ver se ele esta preenchido*/
						if(Qtd==""){
						alert("Preencha o campo Quantidade de mercadoria!");
						formNeg.qtd.focus();
					 return false;
					}/*Validando a quantidade para ver se ele esta preenchido e se ele digitou ao menos 1 ponto e preço tem que ter no minimo 3 digitos */
						if(Prec=="" || Prec.indexOf('.')== -1 || Prec.length <=2 ){
						alert("Preencha o campo Preço da mercadoria\nLEMBRE-SE QUE DEVE CONTER UM PONTO ENTRE OS DIGITOS . \n EXEMPLO=200.00! \n É NECESSARIO TER NO MINIMO 3 DIGITOS");
						formNeg.prec.focus();
						 return false;
					}	/*validando o preço para ver se só foram digitados numeros e se existe ponto..*/
					 if(isNaN(nump) || Prec.indexOf('.')==0){
		       		 alert("O valor digitado no campo Preço não é numero .\nPor favor digite um numero \n Lembre-se que é preciso ter o ponto ");
		        	formNeg.prec.focus();
		         return false;
		       		 }		
						if(TN==""){
						alert("Preencha o campo Tipo de negociação!");
						formNeg.tn.focus();
						 return false;
					}
					    if(TN!="Compra" && TN!="Venda"){
						alert("Retorne ao tipo de negociação , pois você digitou um nome invalido");
						formNeg.tn.focus();
						 return false;
					}
						else{
						return erro;
					}

      	
         }
