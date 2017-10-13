var hazard : GameObject;
var spawnValues : Vector3;

function Start () {
    SpawnWaves ();
}

function SpawnWaves () {
    var spawnPosition : Vector3= new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
    var spawnRotation : Quaternion= Quaternion.identity;
    Instantiate (hazard, spawnPosition, spawnRotation);
}