tableextension 50149 TabSign extends Customer
{ //Olister Rumao---- AMOL

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