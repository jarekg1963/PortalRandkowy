using System;
using PortalRandkowy.API.Models;

namespace PortalRandkowy.API.Dtos
{
    public class PhotosForDetailedDTO
    {
                public int Id { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }     // Opis

        public DateTime DateAdded { get; set; }     // Data dodania

        public bool IsMain { get; set; }            // Czy zdjęcie jest główne

    }
}