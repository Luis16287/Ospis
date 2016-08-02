if (Services.find().count() === 0) {
  Services.insert({
    title: 'Prestadores',
  });

  Services.insert({
    title: 'Farmacias',
  });

  // Services.insert({
  //   title: 'Emergencias',
  // });
}
