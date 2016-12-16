/**
 * Created by mattpowell on 12/16/16.
 */

describe("StringUtils", function(){
    it("Should format the sentence", function(){
        var phrase = "I love {0}, baseball is {1} and shuffleboard is {2}.";
        expect(StringUtils.format("football", "slow and boring to watch but fun to play", "for retired people")).toEqual("I love football. Baseball is slow and boring to watch but fun to play. Shuffleboard is for retired people.");
    })
});