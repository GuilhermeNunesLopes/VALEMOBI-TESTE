<?php
class bd{
	private $servidor ='localhost',
/*user*/	$usuario  = 'root',
/*senha*/	$senha    = '',
/*conexão*/	$con;
	//declando as variaveis a cima para conectar ao banco
	//chamando a função conectar pro banco ,usando ela como publica para poder ser herdada por qualquer outra classe.
	
	public function conectar(){
	//chamando a função conect do mysql pra conectar ao banco
		$this->con =mysql_connect($this->servidor,$this->usuario,$this->senha);
		if($this->con){
		//aqui a variavel banco esta sendo usada para selecionar o banco com o nome de cinema
		  $banco=mysql_select_db('negociar',$this->con);
		  //Deixando o banco no formato utf-8
		  mysql_set_charset('utf8');
		  if(!$banco){
	/*impede que a pagina continua atualizar*/
				die('Erro ao selecionar o banco de dados');
			}
		}else{
			die('Erro ao conectar ao banco de dados');
			}
		}public function query($query){
				return mysql_query($query);
		}
		public function desconectar(){
				mysql_close($this->con);
				}
			}
	?>
		
		
	