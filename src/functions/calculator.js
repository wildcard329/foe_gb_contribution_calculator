class fpsCalculations {
    static calculateFPSAllocations(contribution_multiplier, num1, num2, num3, num4, num5) {
        return {
            seat1: Math.ceil(contribution_multiplier * num1),
            seat2: Math.ceil(contribution_multiplier * num2),
            seat3: Math.ceil(contribution_multiplier * num3),
            seat4: Math.ceil(contribution_multiplier * num4),
            seat5: Math.ceil(contribution_multiplier * num5)
        }
    };
    static calculatePlayerContributions(total, donations) {
        return total - donations.seat1 - donations.seat2 - donations.seat3 - donations.seat4 - donations.seat5
    }
    static setTotalContributions(gb_name, donations, multiplier, price) {
        return {
            name: gb_name,
            id: this.generateId(),
            seat1: donations.seat1,
            seat2: donations.seat2,
            seat3: donations.seat3,
            seat4: donations.seat4,
            seat5: donations.seat5,
            multiplier: multiplier,
            player: price
        }
    }
    static removeGB(id, buildings) {
        return buildings.filter(building => {
            return building.id !== id
        })
    }
    static checkIntValue(val) {
        return val % 1 !== 0;
    }
    static generateId() {
        // this generates a unique id for html elements
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }
};

export default fpsCalculations;
