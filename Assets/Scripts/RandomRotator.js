var tumble : float;

function Start () : void {
	 var rb = GetComponent.<Rigidbody>();
	 rb.angularVelocity = Random.insideUnitSphere * tumble; 
}