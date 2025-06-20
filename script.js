document.getElementById('booking-form').addEventListener('submit', function(e) {
      e.preventDefault();
        const name = this.name.value.trim();
          const email = this.email.value.trim();
            const guests = this.guests.value;
              const datetime = new Date(this.datetime.value);

                if (!name || !email || !datetime) return;

                  const result = document.getElementById('booking-result');
                    result.style.color = 'green';
                      result.textContent = `Thanks ${name}! 
                          Your reservation for ${guests} person(s) on 
                              ${datetime.toLocaleString()} has been received. 
                                  We’ll email you at ${email} soon.`;

                                    this.reset();
                                    });
