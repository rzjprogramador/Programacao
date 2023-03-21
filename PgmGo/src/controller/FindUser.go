package controller

import "github.com/gin-gonic/gin"

// gin.Context - é o contexto da reuisicao :: quando chega requisicao ele da um gin.Context que vem um obj de informacoes da requisicao acessamos com a variavel c.informacao que queremos tipo c.Body,

func FindUserById(c *gin.Context) {}

func FindUserByEmail(c *gin.Context) {}