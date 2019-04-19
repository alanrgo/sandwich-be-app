
export default class HealthController {
    
    public healthCheck(req, res, next): void {
        res.sendStatus(200);
    }
}