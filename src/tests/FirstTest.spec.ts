import { stat } from "fs";
import StatusController from "./../controllers/Status.controller";

test('it should be ok', async () => {
    const statusController = new StatusController()

    type Status = {
        message: string
    }
    const getStatus = await statusController.getStatus()
    expect(getStatus).toMatchObject<Status>(getStatus)
})