tableextension 50149 TabSign extends Customer
{ //Olister Rumao - 05-04-2018--TRIAL---NEW

    fields
    {
       field(50050;SignatureImage;Blob)
       {
           Subtype=Bitmap;
       }
       
    }
    
    var
        myInt : Integer;
}