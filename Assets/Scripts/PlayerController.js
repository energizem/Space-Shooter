#pragma strict
class Boundary
{
    var xMin : float;
    var xMax : float;
    var zMin : float;
    var zMax : float;
}

var speed : float;
var tilt : float;
var boundary : Boundary;

var shot : GameObject;
var shotSpawn : Transform;
var fireRate : float;

private var nextFire : float;

function Update () {
    if (Input.GetButton("Fire1") && Time.time > nextFire)
    {
        nextFire = Time.time + fireRate;
        Instantiate(shot, shotSpawn.position, shotSpawn.rotation);
		GetComponent.<AudioSource>().Play ();
    }
}


function FixedUpdate () {
	 
     var moveHorizontal : float= Input.GetAxis ("Horizontal");
     var moveVertical : float= Input.GetAxis ("Vertical");
	 var rb = GetComponent.<Rigidbody>();
	 

     var movement : Vector3= new Vector3 (moveHorizontal, 0.0f, moveVertical);
	 rb.velocity = movement * speed;

	 rb.position = new Vector3 
    (
        Mathf.Clamp (rb.position.x, boundary.xMin, boundary.xMax), 
        0.0f, 
        Mathf.Clamp (rb.position.z, boundary.zMin, boundary.zMax)
    );

    rb.rotation = Quaternion.Euler (0.0f, 0.0f, rb.velocity.x * -tilt);

}


