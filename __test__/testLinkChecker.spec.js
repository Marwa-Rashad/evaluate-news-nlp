import { linkChecker } from "../src/client/js/linkChecker"

    
describe("Testing the link checking functionality", () => {
    test("Testing the linkChecker() function", () => {
           expect(linkChecker).toBeDefined();
})});



describe("Testing the link is full URL", () => {
    test("Testing the linkChecker() function validation", () => {
           expect(linkChecker('www.google.com')).toBeFalsy();
})});