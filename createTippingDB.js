// drop the db
use tippingdb
db.dropDatabase()

// create the db
use tippingdb

// create the collection
db.createCollection("team")
db.createCollection("match")
db.createCollection("user")
db.createCollection("userTips")

// populate the team collection (MISING: teamPosition, teamPoints, teamPercentage, gamesPlayed, gamesWon, gamesLost, gamesDrawed)
db.team.insertMany([
					{_id: 'Adelaide'},
					{_id: 'Brisbane'},
					{_id: 'Carlton'},
					{_id: 'Collingwood'},
					{_id: 'Essendon'},
					{_id: 'Fremantle'},
					{_id: 'Geelong'},
					{_id: 'Gold Coast'},
					{_id: 'Greater Western Sydney'},
					{_id: 'Hawthorn'},
					{_id: 'Melbourne'},
					{_id: 'North Melbourne'},
					{_id: 'Port Adelaide'},
					{_id: 'Richmond'},
					{_id: 'St Kilda'},
					{_id: 'Sydney'},
					{_id: 'West Coast'},
					{_id: 'Western Bulldogs'}
])

// populate the match collection (MISSING: winningTeam, homeOdds, awayOdds)
db.match.insertMany([
						{roundNo: 1, gameNo : 1, matchDate: new Date("2017-03-23T19:20:00Z"), matchLocation: "MCG", homeTeam: "Carlton", awayTeam: "Richmond", homeOdds: "1.21", awayOdds: "2.74"},
						{roundNo: 1, gameNo : 2, matchDate: new Date("2017-03-24T19:50:00Z"), matchLocation: "MCG", homeTeam: "Collingwood", awayTeam: "Western Bulldogs", homeOdds: "2.53", awayOdds: "1.11"},
						{roundNo: 1, gameNo : 3, matchDate: new Date("2017-03-25T16:35:00Z"), matchLocation: "ES", homeTeam: "St Kilda", awayTeam: "Melbourne", homeOdds: "4.05", awayOdds: "3.10"},
						{roundNo: 1, gameNo : 4, matchDate: new Date("2017-03-25T16:35:00Z"), matchLocation: "SCG", homeTeam: "Sydney", awayTeam: "Port Adelaide", homeOdds: "1.89", awayOdds: "2.90"},
						{roundNo: 1, gameNo : 5, matchDate: new Date("2017-03-25T19:25:00Z"), matchLocation: "MCG", homeTeam: "Essendon", awayTeam: "Hawthorn", homeOdds: "1.10", awayOdds: "1.99"},
						{roundNo: 1, gameNo : 6, matchDate: new Date("2017-03-25T19:05:00Z"), matchLocation: "MS", homeTeam: "Gold Coast", awayTeam: "Brisbane", homeOdds: "2.01", awayOdds: "3.67"},
						{roundNo: 1, gameNo : 7, matchDate: new Date("2017-03-26T13:10:00Z"), matchLocation: "ES", homeTeam: "North Melbourne", awayTeam: "West Coast", homeOdds: "4.89", awayOdds: "6.20"},
						{roundNo: 1, gameNo : 8, matchDate: new Date("2017-03-26T14:50:00Z"), matchLocation: "AO", homeTeam: "Adelaide", awayTeam: "Greater Western Sydney", homeOdds: "4.03", awayOdds: "1.09"},
						{roundNo: 1, gameNo : 9, matchDate: new Date("2017-03-26T16:40:00Z"), matchLocation: "DS", homeTeam: "Fremantle", awayTeam: "Geelong", homeOdds: "1.90", awayOdds: "2.30"},
						
						{roundNo: 2, gameNo : 1, matchDate: new Date("2017-03-30T19:20:00Z"), matchLocation: "MCG", homeTeam: "Richmond", awayTeam: "Collingwood", homeOdds: "1.08", awayOdds: "2.56"},
						{roundNo: 2, gameNo : 2, matchDate: new Date("2017-03-31T19:50:00Z"), matchLocation: "ES", homeTeam: "Western Bulldogs", awayTeam: "Sydney", homeOdds: "3.01", awayOdds: "1.67"},
						{roundNo: 2, gameNo : 3, matchDate: new Date("2017-04-01T13:45:00Z"), matchLocation: "MCG", homeTeam: "Hawthorn", awayTeam: "Adelaide", homeOdds: "1.55", awayOdds: "1.90"},
						{roundNo: 2, gameNo : 4, matchDate: new Date("2017-04-01T16:35:00Z"), matchLocation: "SPO", homeTeam: "Greater Western Sydney", awayTeam: "Gold Coast", homeOdds: "1.89", awayOdds: "2.90"},
						{roundNo: 2, gameNo : 5, matchDate: new Date("2017-04-01T18:25:00Z"), matchLocation: "G", homeTeam: "Brisbane", awayTeam: "Essendon", homeOdds: "4.90", awayOdds: "3.01"},
						{roundNo: 2, gameNo : 6, matchDate: new Date("2017-04-01T16:40:00Z"), matchLocation: "DS", homeTeam: "West Coast", awayTeam: "St Kilda", homeOdds: "1.22", awayOdds: "2.99"},
						{roundNo: 2, gameNo : 7, matchDate: new Date("2017-04-02T13:10:00Z"), matchLocation: "ES", homeTeam: "Geelong", awayTeam: "North Melbourne", homeOdds: "1.21", awayOdds: "2.81"},
						{roundNo: 2, gameNo : 8, matchDate: new Date("2017-04-02T15:20:00Z"), matchLocation: "MCG", homeTeam: "Melbourne", awayTeam: "Carlton", homeOdds: "1.90", awayOdds: "2.74"},
						{roundNo: 2, gameNo : 9, matchDate: new Date("2017-04-02T16:10:00Z"), matchLocation: "AO", homeTeam: "Port Adelaide", awayTeam: "Fremantle", homeOdds: "1.12", awayOdds: "1.85"}
])

// set match primary keys
db.match.createIndex({roundNo: 1, gameNo: 1}, {unique: true})

// populate the user collection
db.user.insertMany([
					{_id: "user1", password: "test", email: "user1@test.com", favouriteTeam: "Carlton", currentWins: 0, currentLosses: 0, currentDraws: 0, userGroup: "odds", emailOptOut: false},
					{_id: "user2", password: "test", email: "user2@test.com", favouriteTeam: "Essendon", currentWins: 0, currentLosses: 0, currentDraws: 0, userGroup: "probability", emailOptOut: false}
])

// populate the userTips Collection (ROUND 1)
db.userTips.insertMany([
						{userID: "user1", roundNo: 1, gameNo: 1, teamID: "Carlton"},
						{userID: "user1", roundNo: 1, gameNo: 2, teamID: "Collingwood"},
						{userID: "user1", roundNo: 1, gameNo: 3, teamID: "Melbourne"},
						{userID: "user1", roundNo: 1, gameNo: 4, teamID: "Sydney"},
						{userID: "user1", roundNo: 1, gameNo: 5, teamID: "Essendon"},
						{userID: "user1", roundNo: 1, gameNo: 6, teamID: "Cold Coast"},
						{userID: "user1", roundNo: 1, gameNo: 7, teamID: "North Melbourne"},
						{userID: "user1", roundNo: 1, gameNo: 8, teamID: "Adelaide"},
						{userID: "user1", roundNo: 1, gameNo: 9, teamID: "Geelong"},
						
						{userID: "user2", roundNo: 1, gameNo: 1, teamID: "Richmond"},
						{userID: "user2", roundNo: 1, gameNo: 2, teamID: "Collingwood"},
						{userID: "user2", roundNo: 1, gameNo: 3, teamID: "Melbourne"},
						{userID: "user2", roundNo: 1, gameNo: 4, teamID: "Port Adelaide"},
						{userID: "user2", roundNo: 1, gameNo: 5, teamID: "Essendon"},
						{userID: "user2", roundNo: 1, gameNo: 6, teamID: "Cold Coast"},
						{userID: "user2", roundNo: 1, gameNo: 7, teamID: "North Melbourne"},
						{userID: "user2", roundNo: 1, gameNo: 8, teamID: "Greater Western Sydney"},
						{userID: "user2", roundNo: 1, gameNo: 9, teamID: "Geelong"}
])

// populate the userTips Collection (ROUND 2)
db.userTips.insertMany([
						{userID: "user1", roundNo: 2, gameNo: 1, teamID: "Collingwood"},
						{userID: "user1", roundNo: 2, gameNo: 2, teamID: "Sydney"},
						{userID: "user1", roundNo: 2, gameNo: 3, teamID: "Hawthorn"},
						{userID: "user1", roundNo: 2, gameNo: 4, teamID: "Gold Coast"},
						{userID: "user1", roundNo: 2, gameNo: 5, teamID: "Essendon"},
						{userID: "user1", roundNo: 2, gameNo: 6, teamID: "West Coast"},
						{userID: "user1", roundNo: 2, gameNo: 7, teamID: "North Melbourne"},
						{userID: "user1", roundNo: 2, gameNo: 8, teamID: "Carlton"},
						{userID: "user1", roundNo: 2, gameNo: 9, teamID: "Fremantle"},
						
						{userID: "user2", roundNo: 2, gameNo: 1, teamID: "Richmond"},
						{userID: "user2", roundNo: 2, gameNo: 2, teamID: "Sydney"},
						{userID: "user2", roundNo: 2, gameNo: 3, teamID: "Adelaide"},
						{userID: "user2", roundNo: 2, gameNo: 4, teamID: "Greater Western Sydney"},
						{userID: "user2", roundNo: 2, gameNo: 5, teamID: "Brisbane"},
						{userID: "user2", roundNo: 2, gameNo: 6, teamID: "West Coast"},
						{userID: "user2", roundNo: 2, gameNo: 7, teamID: "Geelong"},
						{userID: "user2", roundNo: 2, gameNo: 8, teamID: "Melbourne"},
						{userID: "user2", roundNo: 2, gameNo: 9, teamID: "Port Adelaide"}
])

// set userTips primary keys
db.match.createIndex({userID: 1, roundNo: 1, gameNo: 1}, {unique: true})












