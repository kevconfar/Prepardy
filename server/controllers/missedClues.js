
// MISSED_CLUE ROUTE HANDLERS


// CREATES NEW "MISSED CLUE" DOC
const createMissedClue = async (req, res) => {

    const missedClues = req.body; // array of IncorrectClue objects

    try {

        await MissedClues.insertMany(missedClues);
        res.status(201).json(missedClues);

    } catch (error) {

        res.status(409).json({ message: error.message });
    }

}