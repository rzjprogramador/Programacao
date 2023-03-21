package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/rzjprogramador/PgmBaseGo/src/rest_err"
)

func CreateUser(c *gin.Context) {
	err := rest_err.NewBadRequestErr("Ops! Voce chamou a rota { CreateUser } de forma errada.")
	c.JSON(err.Code, err)
}