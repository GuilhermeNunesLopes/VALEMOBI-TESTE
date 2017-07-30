<?php
//incluindo o banco de dados 1x;

class PRINCIPAL {
include_once ("ConectaBD.php");
conectar con =new conectar();
include_once("Validacao.js");
validaTudo val =new validaTudo();	
	
//<><><><>chamando as variaveis do formulario<><><><><><><><><><><><>
    private $CodMerc	=$_POST['cod'];
    private $QTD		=$_POST['qtd'];
    private $TPNeg		=$_POST['tn'];
    private $Preco		=$_POST['prec'];
    Private $Nome		=$_POST['nome'];
    private $TPMerc		=$_POST['tipo'];
//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
   Class Validacao{
     if(val=='A'){
	 echo("Erro na validação");
	 header('location:"Negociação.html');
	 }else{

 //-------------------GET E SET -------------------------   
    public function setCodMerc($CodMerc){
	//pega o codigo da mercadoria
	  $this->CodMerc=$CodMerc;
	}
	public function getCodMerc(){
	//retorna o codigo da mercadoria
		return $this->CodMerc;
	}
 //-------------------------------------------------------
	public function setQTD($QTD){
	//pega a quantidade
	  $this->QTD=$QTD;
	}
	public function getQTD(){
	//retorna a quantidade
		return $this->QTD;
	}
 //-------------------------------------------------------
	public function setTPNeg($TPNeg){
	//pega o tipo de negocio
	  $this->TPNeg=$TPNeg;
	}
	public function getTPNeg(){
	//retorna o tipo de negocio
		return $this->TPNeg;
	}
 //-------------------------------------------------------
    public function setPreco($Preco){
	//pega o preço
	  $this->Preco=$Preco;
	}
	public function getPreco(){
	//retorna o preço
		return $this->Preco;
  //--------------------------------------------------------
	}public function setNome($Nome){
	//pega o Nome
	  $this->Nome=$Nome;
	}
	public function getNome(){
	//retorna o Nome
		return $this->Nome;
	}
  //---------------------------------------------------------
     public function setTPMerc($TPMerc){
	//pega o tipo de mercadoria
	  $this->TPMerc=$TPMerc;
	}
	public function getTPMerc(){
	//retorna o codigo da mercadoria
		return $this->TPMerc;
	}
  //---------------------------------------------------------
		
  }
      }
?>