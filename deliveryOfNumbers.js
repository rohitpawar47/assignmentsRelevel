/* Item delivery needs to take place for a circle of size B. Suppose we start from the position C (given) then find the position where the Ath item will be delivered. */


function itemDelivery(A, B, C) {

    for (let i = C; i <= B; i++) {
        if (i == B && A > 1) {
            i = 0;
        } else if (A == 1) {
            console.log(i);
        }
        A--;
    }
}

itemDelivery(8, 5, 2);
itemDelivery(2, 5, 1);