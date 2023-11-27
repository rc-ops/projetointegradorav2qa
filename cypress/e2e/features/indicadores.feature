Feature: Avaliar o painel de indicadores

  Background: 
    Given Que eu esteja na página dos indicadores

  Scenario: Avaliar inflação IPCA
    When Eu olhar o valor da inflação IPCA Mensal abaixo do icone
    And Comparar com o valor IPCA da tabela
    Then Os valores devem ser iguais

  Scenario: Avaliar inflação INPC
    When Eu olhar o valor da inflação INPC abaixo do icone
    And Comparar com o valor INPC da tabela
    Then Os valores devem ser iguais

  Scenario: Avaliar a variação do PIB
    When Eu olhar a variação do PIB abaixo do icone
    And Comparar com o valor do PIB da tabela
    Then Os valores devem ser iguais

  Scenario: Avaliar a taxa de desemprego
    When Eu olhar a taxa de desemprego abaixo do icone
    And Comparar com o valor de desemprego da tabela
    Then Os valores devem ser iguais
