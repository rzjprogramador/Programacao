package tecnica

import "github.com/rzjprogramador/PgmBaseGo/utils"

type Tecnica struct {
	Nome string
	Tecnica string
	Exemplo string
}

func newTecnica(t Tecnica) *Tecnica{
	return &t
}

func ExecuteTecnica() {
	utils.ShowObject(newTecnica(UseTipoDeDadoQuePrecisa))
}