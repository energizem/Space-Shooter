#pragma strict

var speed : float;

function Start () : void {
	var rb = GetComponent.<Rigidbody>();
    rb.velocity = transform.forward * speed;
}
