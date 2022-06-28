class Music{
   constructor(title,singer,img,file){
       this.title=title;
       this.singer=singer;
       this.img=img;
       this.file=file;
   }
   getName(){
    return this.title + "-" + this.singer;
   }
   
}

const musicList=[
    new Music("Gözlerinde Bi'Yer","Salman Tin","salmantin.jpg","s.mp3"),
    new Music("Vedalardan Bir Buket","Perdenin Ardındakiler","vedalardan.jpg","p.mp3"),
    new Music("Torna","Son Feci Bisiklet","torna.jpg","torna.mp3"),
    new Music("Adım Yok","Yirmi7","yirmi7.jpg","yirmi7.mp3")
]