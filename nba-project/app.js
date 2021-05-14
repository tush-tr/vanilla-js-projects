const warriorsGames = [
  {
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, state) => {
  const ulParent = document.createElement('ul')
  games.forEach(({ awayTeam: { team: aTeam, points: aPoints, isWinner: isAWinner }, homeTeam: { team: hTeam, points: hPoints, isWinner: ishWinner } }) => {
    const gameLi = document.createElement('li')
    const teamNames = `${aTeam} @ ${hTeam}`
    const scoreLine = getScoreLine(aPoints, hPoints)
    const winnerTeam = hTeam === state ? ishWinner : isAWinner;
    gameLi.classList.add(winnerTeam ? 'win' : 'loss')
    gameLi.innerHTML = `${teamNames} ${scoreLine}`
    ulParent.appendChild(gameLi)
  })
  return ulParent;
}

const getScoreLine = (aPoints, bPoints) => {
  let scoreLine;
  if (aPoints > bPoints) {
    scoreLine = `<b>${aPoints}</b> - ${bPoints}`
  }
  else {
    scoreLine = ` ${aPoints} - <b>${bPoints} </b>`
  }
  return scoreLine;
}

document.body.appendChild(makeChart(warriorsGames,'Golden State'))
document.body.appendChild(makeChart(warriorsGames,'Houston'))